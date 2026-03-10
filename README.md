# Laravel + Webminty Defaults Starter Kit

## Introduction

This is a starter kit for Laravel applications that includes Tailwind CSS, and other useful packages and configurations.
It is designed to help you quickly set up a new Laravel project with a modern development environment.

## Installation

```bash
laravel new my-app --pest --npm --using=webmintydotcom/laravel-quickstart
```

## Included Packages

- [Laravel](#laravel)
  - [Spatie Laravel Data](#spatie-laravel-data)
- [Debugging](#debugging)
  - [Spatie Laravel Ray](#spatie-laravel-ray)
- [Testing](#testing)
  - [Pest](#pest)
    - [Spatie Pest Expectations](#spatie-pest-expectations)
    - [Pest Plugin - Faker](#pest-plugin---faker)
    - [Pest Plugin - Laravel](#pest-plugin---laravel)
    - [Pest Plugin - Type Coverage](#pest-plugin---type-coverage)
  - [Larastan](#larastan)
  - [Pint](#pint)
  - [Rector](#rector)
- [NPM](#npm)
  - [Tailwind CSS](#tailwind-css)
  - [Prettier](#prettier)
    - [Prettier Plugin - Tailwind CSS](#prettier-plugin---tailwind-css)
    - [Prettier Plugin - Blade](#prettier-plugin---blade)

### Laravel

Version **12** of Laravel is used in this starter kit.

#### Spatie Laravel Data

Spatie Laravel Data is included to help you create data transfer objects (DTOs) in a simple and elegant way.

[Docs](https://spatie.be/docs/laravel-data/v4/introduction)

### Debugging

#### Spatie Laravel Ray

Spatie Laravel Ray is included to help you debug your Laravel applications with ease.

[Homepage](https://myray.app/)

[Docs](https://myray.app/docs/getting-started/introduction)

### Testing

#### Pest

Pest is included to help you write expressive and elegant tests for your Laravel applications.

[Homepage](https://pestphp.com/)

[Docs](https://pestphp.com/docs/installation)

##### Spatie Pest Expectations

Spatie Pest Expectations is included to help you write expressive and readable tests using Pest.

[Docs](https://github.com/spatie/pest-expectations)

##### Pest Plugin - Faker

[Docs](https://pestphp.com/docs/plugins#faker)

##### Pest Plugin - Laravel

[Docs](https://pestphp.com/docs/plugins#laravel)

##### Pest Plugin - Type Coverage

[Docs](https://pestphp.com/docs/type-coverage)

#### Larastan

Larastan is included to help you catch type errors in your Laravel applications using PHPStan.

[Docs](https://github.com/larastan/larastan)

#### Pint

Pint is included to help you format your Laravel code according to the Webminty coding standard.

[Docs](https://laravel.com/docs/12.x/pint)

#### Laravel Rector

Rector is included to help you refactor and upgrade your Laravel codebase automatically.

[Docs](https://github.com/driftingly/rector-laravel)

### NPM

#### Tailwind CSS

Tailwind CSS is included to help you build modern and responsive user interfaces with ease.

[Homepage](https://tailwindcss.com/)

[Docs](https://tailwindcss.com/docs/installation)

#### Prettier

Prettier is included to help you format your code consistently across your project.

[Homepage](https://prettier.io/)

[Docs](https://prettier.io/docs/en/index.html)

##### Prettier Plugin - Tailwind CSS

Prettier Plugin for Tailwind CSS is included to help you format your Tailwind CSS classes automatically.

[Docs](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

##### Prettier Plugin - Blade

Prettier Plugin for Blade is included to help you format your Blade templates automatically.

[Docs](https://github.com/stillat/blade-parser-typescript)

## Additional Configurations

Changes to the default Laravel files are included in this starter kit to improve performance and developer experience.

### app/Providers/AppServiceProvider.php

```php
Model::preventLazyLoading();

if ($this->app->isProduction()) {
    Model::handleLazyLoadingViolationUsing(function ($model, $relation) {
        $class = get_class($model);

        info("Attempted to lazy load [{$relation}] on model [{$class}].");
    });
    DB::prohibitDestructiveCommands();
} else {
    Model::preventAccessingMissingAttributes();
    Model::preventSilentlyDiscardingAttributes();
    Model::shouldBeStrict();
}

Vite::usePrefetchStrategy('aggressive');
```