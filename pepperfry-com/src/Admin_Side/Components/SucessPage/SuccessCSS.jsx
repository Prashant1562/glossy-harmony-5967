import styled from "styled-components";


export const SuccessWrapper = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 10%;
  background-color: #dcdcdc;
  padding: 50px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

.thank {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    margin-top: 15px;
    font-weight: 900;
    font-size: 30px;
    color: #324d67;
  }

  .icon {
    color: green;
    font-size: 35px;
     margin: auto;
     margin-top:-15px;
  }

  .email-msg {
    font-size: 16px;
    font-weight: 600;
    text-align: center;
    padding:8px;
  }

  .email{
  font-size: 15px;
     color: #f02d34;
     text-align: center;
  }

  .description {
    font-size: 15px;
    text-align: center;
    color: #f02d34;
    padding:5px;
  }




`;


export const Button = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 22px;
  border-radius: 5px;
  text-align: center;
  padding: 12px;
  color: #fff;
  background-color: #f16521;
  font-size: 16px;
  box-sizing: border-box;
  transition: 1s;
  font-weight: 600;
`;