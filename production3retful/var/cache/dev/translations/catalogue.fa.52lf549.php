<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('fa', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'قبلی',
    'label_next' => 'بعدی',
  ),
));

$catalogueEn = new MessageCatalogue('en', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Previous',
    'label_next' => 'Next',
  ),
));
$catalogue->addFallbackCatalogue($catalogueEn);

return $catalogue;
