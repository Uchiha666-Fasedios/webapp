<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private '.service_locator.O._P6q5' shared service.

return $this->privates['.service_locator.O._P6q5'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($this->getService, [
    'jwt_auth' => ['privates', 'App\\Services\\JwtAuth', 'getJwtAuthService.php', true],
]);