
import styled from "styled-components";


export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: row;

  .heading {
    text-align: center;
  }
  .btn-f {
    width: 100px;
    padding: 3px;
    height: 40px;
    border: none;
    font-size: medium;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: black;
    background: transparent;
    font-weight: 600;
  }
  .btn-f:hover {
    border: 1px solid orangered;
    color: orangered;
    border-radius: 5px;
    transition: color 1s, border 1s;
  }

  .sort {
    margin-left: 130px;
    margin-top: 70px;
  }

  .filter {
    width: 25%;
    font-weight: 800;
    font-size: large;
    border: 0.1px solid gray;
    border-bottom: 0;
  }
`;



export const ProductListHeading = styled.div`
  margin-top: 20px;
  text-align: center;
  font-family: "Times New Roman", Times, serif;
`;


export const CardWrapper = styled.div`
  position: relative;
  .card-price {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: orangered;
    margin: 3px;
  }
  .card-brand {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: rgb(182, 180, 180);
    font-size: medium;
    margin: 3px;
  }

  .card-savings {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: rgb(8, 171, 8);
    margin: 3px;
  }

  .card-original-price {
    font-weight: 500;
    color: #848484;
    font-size: small;
    margin-left: 8px;
    text-decoration: line-through;
  }
  .count {
    padding-left: 10px;
  }

  & img {
    width: 95%;
    height: 40vh;
  }

  & h6 {
    text-align: left;
    margin: 3px;
  }

  & h4 {
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: left;
    margin: 3px;
  }

  & h5 {
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    text-align: left;
    margin: 3px;
  }
`;

export const ProductCardList = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: repeat(3, 33%);
  border: 0.1px solid gray;
  border-bottom: 0;
  border-left: 0;
  padding: 1%;
  margin-bottom: 100px;
  grid-gap: 1%;
`;


export const Button = styled.button`
  position:absolute;
  top: 55%;
  left: 30%;
  border: none;
  width: 15vh;
  height: 4vh;
  /* margin-left: 100px; */
  color: white;
  background-color : #ff7035;
`;



export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: 6vmax;


  .pagination {
    display: flex;
    justify-content: center;
    padding: 0;
  }

  .page-item {
    background-color: rgb(255, 255, 255);
    list-style: none;
    border: 1px solid rgba(0, 0, 0, 0.178);
    padding: 1vmax 1.5vmax;
    transition: all 0.3s;
    cursor: pointer;
  }
  .page-item:first-child {
    border-radius: 5px 0 0 5px;
  }

  .page-item:last-child {
    border-radius: 0 5px 5px 0;
  }
  .page-link {
    text-decoration: none;
    font: 300 0.7vmax "Roboto";
    color: rgb(80, 80, 80);
    transition: all 0.3s;
  }

  .page-item:hover {
    background-color: rgb(230, 230, 230);
  }

  .page-item:hover .page-link {
    color: rgb(0, 0, 0);
  }

  .pageItemActive {
    background-color: tomato;
  }

  .pageLinkActive {
    color: white;
  }
`;