import React from 'react';
import {useRouteMatch, Link} from 'react-router-dom'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

import logoImg from '../../assets/logo.svg';

import {Header,RepositoryInfo, Issues} from './styles'

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const {params} = useRouteMatch<RepositoryParams>();
    
    return(
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars0.githubusercontent.com/u/58960887?s=460&u=563b853a9bc37f44f2d0a5810663751fefd1c016&v=4" alt="test"/>
                    <div>
                        <strong>obrenoco/test-front</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Start</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="sdfdsfdsf">
                    <div>
                        <strong>sadfasdfadfad</strong>
                        <p>adfasdfasdfasdf</p>
                    </div>
                    <FiChevronRight size={20}/>
                </Link>
            </Issues>
        </>
    );
}

export default Repository;
