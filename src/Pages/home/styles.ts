import styled from "styled-components";

export const HomeContainer = styled.div`
    background: #ede8e2;
    width: 100%;
    height: 90vh;
    padding: 1rem;

    .card{
        background: #fff;
        width: 80%;
        margin: 1rem auto;
        font-size: 15px;

    }

    button{
        background: #93c447;
        /* padding: 1%; */
        color: #fdfdfd;
    }

    .cardHeader{
        display: flex;
        gap: 20px;
        font-weight: 100;
        padding: 1rem ;
        margin-bottom: 1rem;
    }
    p{
        padding: 1rem;
    }
    .lastone{
        border: 3px  dotted #f6f6f6;
        background: #f6f6f6;
        margin-top: -1rem;
        margin-bottom: 1rem;
    }
    .lastCard{
        padding: 1rem;
    }
`