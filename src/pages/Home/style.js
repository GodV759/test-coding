import styled from "styled-components";
import {List} from 'antd';
export const ListSearch = styled(List)`
    position: 'absolute';
    z-index: 1;
    width: '35%';
    top: '40px';
    background-color: '#dddcd4';
    cursor: pointer;
`
export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 10px;
    input {
        width: 50%
    }
`
export const FilterWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 1;
`
export const ReacipeWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 40px;
    justify-content: center;

    padding-right: 1px;

    @media screen and (max-width: 768px) {
        .recipe-list {
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); 
          gap: 15px;
        }
      }
`