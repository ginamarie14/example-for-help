import { gql } from "@apollo/client";

export const LOAD_PRODUCTS = gql`
    query{
        getAllProducts{
            _id,
            image,
            name
        }
    }
`;