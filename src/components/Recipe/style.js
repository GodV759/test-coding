import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin: 10px; /* Khoảng cách giữa các item */
    border: 1px solid #ccc;
    border-radius: 5px;
    cursor: pointer; /* Con trỏ chuột khi rê vào item */
    transition: transform 0.3s ease; /* Hiệu ứng chuyển động khi hover */
    &:hover { transform: scale(1.05); }
    img {
        width: 100%; 
        height: auto; 
        border-radius: 5px;
    }
    h3 {
        margin-top: 10px; /* Khoảng cách giữa ảnh và tên món ăn */
        text-align: center; /* Canh giữa tên món ăn */
        font-size: 1.1rem; /* Kích thước chữ tên món ăn */
        color: #333; /* Màu chữ */
    }
`