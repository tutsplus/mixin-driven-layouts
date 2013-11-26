# LESS Compiler

### Documentation

## GETTING STARTED

#### Prerequisites

* Node.js & NPM

#### Install

Windows: Double click "npminstall.bat

OR

1. From a console / terminal, cd to the root folder of the project
2. Run `npm install`

#### Set folder locations & file named

In Gruntfile.js set values for `LESSfiles_location`, to the folder holding of your LESS files, and `CSSoutput_location`, to the folder you want your CSS to be written to.

You may also wish to change line 20 to suit the name of your primarly LESS file, and the name you want your CSS output file to bear:

`'<%= CSSoutput_location %>/style.css': ['<%= LESSfiles_location %>/less_imports.less']`


#### Usage

* Windows: Double click "gruntwatch.bat" in the "LESScompiler" folder to initiate watching for changes and LESS compilation on change
* Initiate watch via terminal: CD to "LESScompiler" folder, enter command `grunt watch`.
* Manual compile via terminal compile less: CD to "LESScompiler" folder, enter command `grunt less`