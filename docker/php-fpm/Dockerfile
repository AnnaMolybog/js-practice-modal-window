FROM phpdockerio/php71-fpm:latest

ARG USERID=500
ARG GROUPID=500

RUN apt-get update \
    # Frontend tools
    && apt-get install -y apt-transport-https \
    && curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt update && apt install -y yarn \
    && curl -sL https://deb.nodesource.com/setup_6.x | bash - \
    && apt-get install -y nodejs \
    # PHP extensions
    && apt-get -y --no-install-recommends install php7.1-gd php7.1-mbstring php7.1-intl php7.1-soap php7.1-xsl git \
    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/* \
    && mkdir /application \
WORKDIR "/application"
USER www-data