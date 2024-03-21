import React, {useState} from 'react'
import Recipe from '../../components/Recipe';
import data from '../../assets/data/data.json'
import { Input, List, Avatar  } from 'antd';
import * as Style from './style'
import { useNavigate } from 'react-router-dom';
import { ROUTES } from './../../routes/routes'
const Home = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const handleSearch = (event) => {
        const searchText = event.target.value.toLowerCase();
        const filteredRecipes = data.recipes.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchText)
        );
        setFilteredRecipes(filteredRecipes);
        setSearchText(searchText);

    };
    const handleClick = (name) => {
        navigate(`${ROUTES.RECIPE}?name=${name}`)
    }

    return (
        <Style.Wrapper>
            <Input placeholder="Search recipe..." onChange={handleSearch} />
            {searchText && filteredRecipes.length > 0 && (
                <List
                    style={{ position: 'absolute', zIndex: 1, width: '35%', top: '50px', backgroundColor: '#FFF', cursor: 'pointer'}}  
                    itemLayout="horizontal"
                    dataSource={filteredRecipes}
                    renderItem={(recipe) => (
                        <List.Item onClick={() => handleClick(recipe.name)}>
                            <List.Item.Meta
                                avatar={<Avatar src={`${recipe.image_url}`} />}
                                title={<b>{recipe.name}</b>}
                                />
                        </List.Item>
                    )}
                    />
                    )}
        <Style.ReacipeWrapper>
            {data.recipes.map(item => (
                <Recipe recipe={item} handleClick={handleClick} />
            ))
            }
        </Style.ReacipeWrapper>
    </Style.Wrapper>
  )
}

export default Home