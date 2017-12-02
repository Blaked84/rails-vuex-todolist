## Intall

```bash
yarn install
bundle install
```

## Steps
```bash
rails g resource Todo name:string done:boolean  
rails g scaffold_controller Todo --skip-template-engine
# override existing files
```

## Tips
To add ES2015 shorthand properties support when compliling:
```bash
yarn add babel-preset-es2015 
```
And add to your `.babelrc` (at the root of your project)
```yml
{
  "presets": ["es2015"]
}  
```