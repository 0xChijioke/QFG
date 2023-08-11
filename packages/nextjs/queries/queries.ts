import { gql } from "@apollo/client";

// Define queries without using fragments
export const GET_PROJECT = gql`
  query GetProject($projectId: ID!) {
    project(id: $projectId) {
      id
      metaPtr {
        protocol
        pointer
      }
      owners {
        id
        address
      }
      accountProjects {
        account {
          id
          address
        }
      }
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query GetAllProjects {
    projects {
      id
      metaPtr {
        protocol
        pointer
      }
      owners {
        id
        address
      }
      accountProjects {
        account {
          id
          address
        }
      }
    }
  }
`;

export const GET_ACCOUNT = gql`
  query GetAccount($accountAddress: String!) {
    account(address: $accountAddress) {
      id
      address
      projectsOwned {
        id
        metaPtr {
          protocol
          pointer
        }
      }
    }
  }
`;

export const GET_ALL_ACCOUNTS = gql`
  query GetAllAccounts {
    accounts {
      id
      address
      projectsOwned {
        id
        metaPtr {
          protocol
          pointer
        }
      }
    }
  }
`;
