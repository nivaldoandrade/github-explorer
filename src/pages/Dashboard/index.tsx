import React, { useState, FormEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import HeaderPage from '../../components/header';

import api from '../../services/api';

import { Title, Form, Repository, Error } from './styles';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  const [newRep, setNewRep] = useState('');

  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExporer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@GithubExporer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleRepository(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!newRep) {
      setInputError('Por favor, digite autor/reposítorio para buscar.');
      return;
    }

    try {
      const response = await api.get(`repos/${newRep}`);

      const newRepository = await response.data;

      setRepositories([...repositories, newRepository]);
      setNewRep('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na buscar do repositório, tente novamente.');
    }
  }

  return (
    <>
      <HeaderPage />
      <Title>Explore repositórios no Github.</Title>

      <Form hasError={!!inputError} onSubmit={handleRepository}>
        <input
          value={newRep}
          onChange={e => setNewRep(e.target.value)}
          placeholder="Digite aqui"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repository>
        {repositories.map(repository => (
          <Link
            key={repository.full_name}
            to={`/repositories/${repository.full_name}`}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>
                {!repository.description
                  ? 'Not description'
                  : repository.description}
              </p>
            </div>
            <FiChevronRight size={30} />
          </Link>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
