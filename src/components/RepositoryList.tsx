import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";


import '../styles/repositories.scss';

//https://api.github.com/orgs/Rocketseat/repos
//https://api.github.com/users/DavidRFRod/repos

interface Repository {
    name: string;
    description: string;
    html_url: string;
}


export function RepositoryList(){
    const [repositories, setRepositories] = useState <Repository[]>([]);

    useEffect(() => {
       fetch('https://api.github.com/users/DavidRFRod/repos')
       .then(response => response.json())
       .then(data => setRepositories(data))
    }, [])


    return (
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                {repositories.map(repository => {
                    return   <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    );
}