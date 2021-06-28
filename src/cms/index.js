import { init } from "netlify-cms-app"

init({
    config: {
        load_config_file: false,
        backend: {
            name: "git-gateway",
            repo: "trevsm/studio-voce2",
            branch: "master",
            use_graphql: true,
        },
        media_folder: "/static/media",
        public_folder: "/static/media",
        local_backend: {
            url: "http://localhost:8081/api/v1",
            allowed_hosts: ["192.168.0.1"],
        },
        slug: {
            encoding: "ascii",
            clean_accents: true,
            sanitize_replacement: "-",
        },
    },
})
