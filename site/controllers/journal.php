<?php

return function ($page) {
    $journal = $page->children()->listed()->sortBy('date', 'desc');
    $journal = $journal->groupBy(function($p) {
        return $p->date()->toDate('Y');
    });
    $journal = $journal->toArray();
    
    return compact('journal');
};