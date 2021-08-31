import React, { useState } from 'react'
import Header from '../component/Header'
import NewsList from '../component/NewsList'
import Search from '../component/Search'
import axios from "axios";

const Main = () => {
    // react의 hook을 이용하면 setSearchText 함수를 통해 serachText를
    // 이벤트가 발생할 때 마다 재할당할 수 있다.
    const [serachText, setSearchText] = useState(); 
    const [searchResult, setSearchResult] = useState([]);

    const handleTextChange = (e) => {
        const { value } = e.target;
        setSearchText(value);
    };

    const handleButtonClick = () => {
        const keyValue = "본인의 키값"
        axios.get(
            `https://newsapi.org/v2/everything?q=${serachText}&sortBy=publishedAt&apiKey=${keyValue}&language=ko`
        )
        .then((response) => {
            console.log(response.data.articles);
            setSearchResult(response.data.articles);
          });
    };
    return (
        <div>
            <Header title="뉴스검색"></Header>
            <Search 
            handleInput={handleTextChange}
            handleClick={handleButtonClick}></Search>
            <NewsList searchResult={searchResult}></NewsList>
        </div>
    )
}

export default Main
