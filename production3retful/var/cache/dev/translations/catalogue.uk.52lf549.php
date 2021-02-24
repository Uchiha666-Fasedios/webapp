<?php

use Symfony\Component\Translation\MessageCatalogue;

$catalogue = new MessageCatalogue('uk', array (
  'KnpPaginatorBundle' => 
  array (
    'label_previous' => 'Назад',
    'label_next' => 'Далі',
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
