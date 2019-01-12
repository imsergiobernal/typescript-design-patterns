# Typescript design patterns
Design patterns are advanced solutions to commonly occurring software problems. Patterns are about reusable designs and interactions of objects. Each pattern has a name and becomes part of a vocabulary when discussing complex design solutions.

The 23 Gang of Four (GoF) patterns are generally considered the foundation for all other patterns. They are categorized in three groups: Creational, Structural, and Behavioral (see below for a complete list).

In this tutorial we provide JavaScript examples for each of the GoF patterns. Mostly, they follow the structure and intent of the original pattern designs. These examples demonstrate the principles behind each pattern, but are not optimized for JavaScript.

I'm adapting explanations from [here](https://www.dofactory.com/javascript/design-patterns) to Typescript, in order to practice translation old JS syntax into newly TS one.

## How to run
We will use ts-node. For instance:

```ts-node path/to/file.ts```

```ts-node path/to/DESIGNPATTERN/DESIGNPATTERN-single-file.ts```  
or  
```ts-node path/to/DESIGNPATTEN/project-sample/index.ts```

But if we want to debug to check what's going on, we should run node in inspect mode:

```node --inspect -r ts-node/register path/to/file.ts```

```node --inspect -r ts-node/register path/to/DESIGNPATTERN/DESIGNPATTERN-single-file.ts```  
or  
```node --inspect -r ts-node/register path/to/DESIGNPATTEN/project-sample/index.ts```