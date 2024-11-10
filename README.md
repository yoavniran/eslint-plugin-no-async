<p align="center">
    <a href="LICENSE.md">
       <img src="https://img.shields.io/github/license/yoavniran/eslint-plugin-no-async?color=blue&style=plastic" alt="MIT License"/>
    </a>
    <a href="https://badge.fury.io/js/eslint-plugin-no-async">
        <img src="https://badge.fury.io/js/eslint-plugin-no-async.svg" alt="npm version" height="20">
    </a>
</p>


# eslint-plugin-no-async

Disallows code that will transpile into use of regenerator.

If you don't want async/await and generators to be transpiled into use of [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) then use this rule.

## Installation

```shell
#PNPM: 
  $ pnpm add -D eslint-plugin-no-async

#Yarn:
  $ yarn add --dev eslint-plugin-no-async

#NPM:
  $ npm i --save-dev eslint-plugin-no-async
``` 

In Flat Configuration (9+):

```javascript
    import noAsync from "eslint-plugin-no-async";
   
    export default [{
        "plugins": {
            "no-async": noAsync,
        },
        "rules": {
            ...js.configs.recommended.rules,
            "no-async/no-async": [2],

            //with allowGenerators:
            // {
            //     "no-async/no-async": [2, true]
            // }
        }
    }];
```


In .eslintrc(.js) (Before 9):

```eslint
{
    "no-async/no-async": [2]    
}

# with allowGenerators:

{
    "no-async/no-async": [2, true]    
}

```


## Details

```javascript

async function myFunction() {}

const myArrowFunction = async () => {}

function * myGeneratorFunction() { }
```

All of the examples in the code above will result in the use of regenerator after babel transpiled it.

## Options

```eslint
{
    "no-async/no-async": [<level>, <allowGenerators>]    
}
```

**allowGenerators** In case you wish to allow generator functions, set this to true. (default: false)
