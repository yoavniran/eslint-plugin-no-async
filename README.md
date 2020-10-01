# eslint-plugin-no-async

Disallows code that will transpile into use of regenerator.

If you don't want async/await and generators to be transpiled into use of [regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime) then use this rule.

## Installation

```shell
#Yarn:
  $ yarn add --dev eslint-plugin-no-async

#NPM:
  $ npm i --save-dev eslint-plugin-no-async
``` 

In .eslintrc(.js):

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
