# Contributing
Hello, the COVID-19.Tracker team wants you to read this document, it contains information about how you should contribute to the project.

If you want any help, any information about the project, you can always ask Edward at [this e-mail](mailto:solarsailor@protonmail.com). 

Here are some important & useful resources you should read: 
- Project's Code of Conduct: [Markdown](https://github.com/pasenidis/covid19-stats/blob/master/CODE_OF_CONDUCT.md)
- License we use, MIT License: [Markdown](https://github.com/pasenidis/covid19-stats/blob/master/LICENSE)
- README file for basic information: [Markdown](https://github.com/pasenidis/covid19-stats/blob/master/README.md)
- Google's JavaScript Style Guides [Markdown](https://google.github.io/styleguide/jsguide.html)

## Testing
We don't have a specific group of people that are engaged in the application testing.
The testing can be done by everyone! If you did a test and found a vulnerability/issue/problem, you can use the *Issues* tab to tell us about the problem.
If you think that no one from the direct collaborators gave enough attention to the *Issue*, tell us at [this e-mail](mailto:solarsailor@protonmail.com).

## Submiting Changes / Pull Request
When submitting, create a pull request, write exactly and clearly about what you've done.
If you don't know what a pull request is, read [this page](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/about-pull-requests)

In case the pull request contains a minor fix/update/change, a single-line commit message is enough for us.
Otherwise, if you have done a major pull request, do this:
```bash
$ git commit -m "A brief summary of the commit
> 
> A paragraph describing what changed and its impact."
```

## Coding Conventions
Try reading the code we've already written.

You will probably notice that we use `eslint`, for linting.
To lint the source code you will have to run `npm run lint`.
To fix every possible problem using eslint, run `npm run lint:fix`. 
It is configured to check based on the Google's JS Guidelines.

We strive to write readable code for open-source projects.

Some of the rules:
- When indenting, use tabs and not spaces, for better readability;
- We always put spaces after list items, method parameters and variables; e.g.: `1 += 5;` and `[1, 5, 7]` and not `1+=5` or `[1,5,7]`;
- This is open source software. Consider the people who will read your code;
- Add comments when making a change or a fix, administrators should understand if a pull request should be approved.
