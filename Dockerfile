FROM ruby:3.2

RUN apt-get update \
  && apt-get install -y --no-install-recommends nodejs npm \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler:2.4.18 && bundle install

COPY package.json package-lock.json ./
RUN npm ci

EXPOSE 4567
CMD ["bundle", "exec", "middleman", "serve", "--bind-address=0.0.0.0"]
