import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="" />
      <Title>Explore repositorios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/45314027?s=460&u=a263f6ee3662fe86126781219724b49dd11c20fc&v=4"
            alt="Thiago Trindade"
          />

          <div>
            <strong>TrindadeThiago/trindadethiago.github.io</strong>
            <p>Meu portifolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/45314027?s=460&u=a263f6ee3662fe86126781219724b49dd11c20fc&v=4"
            alt="Thiago Trindade"
          />

          <div>
            <strong>TrindadeThiago/trindadethiago.github.io</strong>
            <p>Meu portifolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/45314027?s=460&u=a263f6ee3662fe86126781219724b49dd11c20fc&v=4"
            alt="Thiago Trindade"
          />

          <div>
            <strong>TrindadeThiago/trindadethiago.github.io</strong>
            <p>Meu portifolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/45314027?s=460&u=a263f6ee3662fe86126781219724b49dd11c20fc&v=4"
            alt="Thiago Trindade"
          />

          <div>
            <strong>TrindadeThiago/trindadethiago.github.io</strong>
            <p>Meu portifolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars1.githubusercontent.com/u/45314027?s=460&u=a263f6ee3662fe86126781219724b49dd11c20fc&v=4"
            alt="Thiago Trindade"
          />

          <div>
            <strong>TrindadeThiago/trindadethiago.github.io</strong>
            <p>Meu portifolio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
