import React from "react";
import logoImg from '../../assets/logo.svg'
import { FiChevronRight } from "react-icons/fi";

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="test">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/58960887?s=460&u=563b853a9bc37f44f2d0a5810663751fefd1c016&v=4"
                        alt="Brenoco"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="test">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/58960887?s=460&u=563b853a9bc37f44f2d0a5810663751fefd1c016&v=4"
                        alt="Brenoco"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
                <a href="test">
                    <img 
                        src="https://avatars0.githubusercontent.com/u/58960887?s=460&u=563b853a9bc37f44f2d0a5810663751fefd1c016&v=4"
                        alt="Brenoco"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
                    </div>
                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
}

export default Dashboard;
