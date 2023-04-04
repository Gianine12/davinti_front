import { AiOutlineSearch } from 'react-icons/ai';
import { ButtonSearch, DivSearch, InputSearch } from './style';

export const Pesquisa = ({handlePesquisa}) => {
    return(
        <DivSearch>
            <InputSearch 
                placeholder='Ex.: João' 
                type="text"
                onChange={(e) => handlePesquisa(e.target.value)}
            />
            <ButtonSearch>
                <AiOutlineSearch/>
            </ButtonSearch>
        </DivSearch>
    )
}
