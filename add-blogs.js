const fetch = require("node-fetch");

const blogs = [
    {
        name: "How to create and read QR codes using Node.js",
        publishedOn: "25 Jan 2023",
        description: `Do you know how easily you can write code in Node.js for generating and reading QR codes, In this acrticle
        I have explained how you can easily write code in Node.js for generating and reading QR codes, Check out the article and
        do share and share your thoughts about this awesome module...`,
        link: "https://medium.com/@ravikumarsingh9907/how-to-create-and-read-qr-codes-using-node-js-f32b64feaf08",
    },
    {
        name: "How to resize, apply filters and set quality of images in Node.js",
        publishedOn: "26 Jan 2023",
        description: `In this article i’ll show you how you can change image size,change quality, apply filters. it is really awesome 
        thing to know because you need this many times in your development career. Check out the article published on Medium and
        do share and share your thoughts about this awesome module...`,
        link: "https://medium.com/@ravikumarsingh9907/how-to-resize-apply-filters-and-set-quality-of-images-in-node-js-61223017ce54",
    },
    {
        name: "What is Solr ? The main characteristic of Solr.",
        publishedOn: "02 Feb 2023",
        description: `Solr is highly reliable, scalable and fault tolerant, providing distributed indexing, replication and load-balanced querying, 
        automated failover and recovery, centralized configuration and more. Solr powers the search and navigation features of many of the 
        world's largest internet sites. In this article i have shared some important characteristics of Solr...`,
        link: "https://medium.com/@ravikumarsingh9907/what-is-solr-the-main-characteristic-of-solr-9dd3b1b1462d",
    },
    {
        name: "Creating a server in Golang",
        publishedOn: "20 Mar 2023",
        description: `Golang is one of the best languages for backend development. It is fast, optimized for low-level operations, and easy to write. 
        Additionally, Golang is an easy language to learn and use, making it a great choice for backend development. In this article i have showed that how you can
        easily create a server in Golang, please do check out this article...`,
        link: "https://medium.com/@ravikumarsingh9907/creating-a-server-in-golang-5ac03362f539",
    },
    {
        name: "What is Package-lock.json and why it is important?",
        publishedOn: "05 Sept 2023",
        description: `package-lock.json is a file in Node.js that locks dependency versions, ensuring consistency, faster installs, and security.
         It prevents version conflicts, aids collaboration, and guarantees reproducibility by specifying exact package versions. Essential for Node.js development.`,
        link: "https://medium.com/@ravikumarsingh9907/what-is-package-lock-json-and-why-it-is-important-f52e7b4332a4",
    },
];


Promise.all(blogs.map((data) => {
    fetch('http://localhost:7974/users/me/blogs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }).then(response => {
        return response.json();
    }).then(data => {
        return data;
    }).catch(err => {
        console.log(err);
    })
}));
