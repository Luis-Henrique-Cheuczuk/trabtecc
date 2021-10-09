import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: lightblue;
    padding-top: 15px; /*na web 150px*/
    /*flex-wrap: wrap;*/
    /*flex-basis: 100%;*/
    /*flex-direction: row;*/
    /* Deixa todos os campos lado a lado, porém ainda está desconfigurado */
    align-items: center;
    justify-content: center;
`;

export const Inputs = styled.TextInput`
    height: 45px;
    width: 150px;
    background-color: #000;
    border-radius: 5px;
    border-color: #EEE;
    padding-left: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    align-items: center;
    justify-content: center; 
`;
