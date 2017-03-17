# Sample App that implements an Angular Module that provides automated grid features like sorting, filtering on array data.
[![Build Status][travis-badge]][travis-badge-url]

Taken from [angular.io quickstart](https://github.com/angular/quickstart),



Atom packages:
- [atom-typescript] (https://github.com/TypeStrong/atom-typescript)
- [linter] (https://github.com/steelbrain/linter)
- linter-tslint
- [editorconfig] (https://github.com/sindresorhus/atom-editorconfig)
- [file-icons] (https://github.com/DanBrooker/file-icons)

[travis-badge]: https://travis-ci.org/angular/quickstart.svg?branch=master
[travis-badge-url]: https://travis-ci.org/angular/quickstart


Usage
-
<pre>
  &lt;auto-grid [data]="gridData" #grid&gt;
    &lt;table class="table"&gt;
      &lt;thead&gt;
      &lt;tr&gt;
        &lt;th&gt;id&lt;/th&gt;
        &lt;th auto-grid-enable="fname" enable-sort enable-filter&gt;First Name&lt;/th&gt;
        &lt;th&gt;Last Name&lt;/th&gt;
      &lt;/tr&gt;
      &lt;/thead&gt;
      &lt;tbody&gt;
      &lt;tr *ngFor="let data of ( gridData | gridPipe:grid.selections )"&gt;
        &lt;td&gt;{{data.id}}&lt;/td&gt;
        &lt;td&gt;{{data.fname}}&lt;/td&gt;
        &lt;td&gt;{{data.lname}}&lt;/td&gt;
      &lt;/tr&gt;
      &lt;/tbody&gt;
    &lt;/table&gt;
  &lt;/auto-grid&gt;
</pre>

where grid data is passed provided to the component:

    gridData = [
            {id:1, fname: 'Angad', lname: 'Salaria'},
            {id:2, fname: 'John', lname: 'Doe'},
            {id:3, fname: 'Sam', lname: 'Adams'},
            {id:4, fname: 'John', lname: 'Adams'},
            {id:5, fname: 'Edward', lname: 'Miller'},
            {id:6, fname: 'Lawrence', lname: 'Bross'}
          ];
  
