# ProxyGear Website

## Tailwind setup

Followed - https://www.donnfelker.com/tailwind-css-with-middleman/

## Local development

    docker compose up

Then open http://localhost:4567

## Deploy

    bin/deploy

Builds the site in Docker and pushes `build/` to the `gh-pages` branch (GitHub Pages).
