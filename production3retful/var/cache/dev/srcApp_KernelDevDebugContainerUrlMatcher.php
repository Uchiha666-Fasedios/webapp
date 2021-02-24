<?php

use Symfony\Component\Routing\Matcher\Dumper\PhpMatcherTrait;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class srcApp_KernelDevDebugContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    use PhpMatcherTrait;

    public function __construct(RequestContext $context)
    {
        $this->context = $context;
        $this->staticRoutes = [
            '/user' => [[['_route' => 'user', '_controller' => 'App\\Controller\\UserController::index'], null, ['POST' => 0], null, false, false, null]],
            '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\UserController::create'], null, ['POST' => 0], null, false, false, null]],
            '/login' => [[['_route' => 'login', '_controller' => 'App\\Controller\\UserController::login'], null, ['POST' => 0], null, false, false, null]],
            '/user/edit' => [[['_route' => 'user_edit', '_controller' => 'App\\Controller\\UserController::edit'], null, ['PUT' => 0], null, false, false, null]],
            '/video' => [[['_route' => 'video', '_controller' => 'App\\Controller\\VideoController::index'], null, null, null, false, false, null]],
            '/video/new' => [[['_route' => 'video_new', '_controller' => 'App\\Controller\\VideoController::create'], null, ['POST' => 0], null, false, false, null]],
            '/video/list' => [[['_route' => 'video_list', '_controller' => 'App\\Controller\\VideoController::videos'], null, ['GET' => 0], null, true, false, null]],
        ];
        $this->regexpList = [
            0 => '{^(?'
                    .'|/video/(?'
                        .'|edit/([^/]++)(*:30)'
                        .'|detail/([^/]++)(*:52)'
                        .'|remove/([^/]++)(*:74)'
                    .')'
                .')/?$}sDu',
        ];
        $this->dynamicRoutes = [
            30 => [[['_route' => 'video_edit', '_controller' => 'App\\Controller\\VideoController::create'], ['id'], ['PUT' => 0], null, false, true, null]],
            52 => [[['_route' => 'video_detail', '_controller' => 'App\\Controller\\VideoController::video'], ['id'], ['GET' => 0], null, false, true, null]],
            74 => [[['_route' => 'video_remove', '_controller' => 'App\\Controller\\VideoController::remove'], ['id'], ['DELETE' => 0], null, false, true, null]],
        ];
    }
}
