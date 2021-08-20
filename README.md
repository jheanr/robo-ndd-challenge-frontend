## Project

This is an application for [R.O.B.O] challenge by NDD which you can simulate sending commands to a robot to execute through an graphic interface. You can check the API developed to this project [here](https://github.com/jheanr/robo-ndd-challenge-backend). See [Technologies](#technologies) to details.

<p>
  <a href="#live-preview">Live preview</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#technologies">Technologies</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#how-to-use">How to use</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#speech-commands">Speech commands
</p>

![cover](.github/cover.png?style=flat)

## Live preview

You can access a live preview [here](https://robo-challenge.vercel.app).

## Technologies

- React
- Next.js
- Typescript
- Styled-components
- Axios
- Eslint
- Prettier

## How to use

Clone the project and access the folder.

```shell
$ git clone https://github.com/jheanr/robo-ndd-challenge-frontend.git && cd robo-ndd-challenge-frontend
```

Before running this project, you must edit `.env.example` and change the `API_ENDPOINT`. You can clone the [API project](https://github.com/jheanr/robo-ndd-challenge-backend) and run locally or you can just use this endpoint `https://robo-challenge.herokuapp.com/` which is live;

After that you can follow these steps.

```shell
# Install the dependencies
$ yarn

# Run
$ yarn dev
```

## Speech commands

If your browser supports, you can try to use speech commands to move the [R.O.B.O]. See the current commands below:

- Inclinação
  - Para cima: Top, Up, Look up, Look to top, Head up, Move your head up 
  - Em repouso: Rest, Rest your head
  - Para baixo: Down, Look down, Move your head down

- Rotação
  - Rotação -90°: Turn right, Rotate your head to minus ninety, Move your head to minus ninety, Rotate your head to position one, Move your head to position one
  - Rotação -45°: Look right, Rotate your head to minus forty five, Move your head to minus forty five, Rotate your head to position two, Move your head to position two
  - Em repouso: Look front, Look to me, Rotate your head to position three, Move your head to position three
  - Rotação 45°: Look left, Rotate your head to forty five, Move your head to forty five, Rotate your head to position four, Move your head to position four
  - Rotação 90°: Turn left, Rotate your head to ninety, Move your head to ninety, Rotate your head to position five, Move your head to position five
  
- Cotovelo (the commands are the same for both arms, just say which one you want to move)
  - Em repouso: Rest your left elbow, Left elbow rest, Elbow left rest, Left elbow to position one, Elbow left to position one, Move your left elbow to position one
  - Levemente contraído: Contract slightly your left elbow, Left elbow slightly contracted, Elbow left slightly contracted, Left elbow to position two, Elbow left to position two, Move your left elbow to position two
  - Contraído: Contract your left elbow, Left elbow contracted, Elbow left contracted, Left elbow to position three, Elbow left to position three, Move your left elbow to position three
  - Fortemente contraído: Contract tightly your left elbow, Left elbow tightly contracted, Elbow left tightly contracted, Left elbow to position four, Elbow left to position four, Move your left elbow to position four

- Pulso (the commands are the same for both arms, just say which one you want to move)
  - Rotação -90°: Rotate your left wrist to minus ninety, Move your left wrist to minus ninety, Rotate your left wrist to position one, Move your left wrist to position one, Left wrist to position one, Wrist left to position one
  - Rotação -45°: Rotate your left wrist to minus forty five, Move your left wrist to minus forty five, Rotate your left wrist to position two, Move your left wrist to position two, Left wrist to position two, Wrist left to position two
  - Em repouso: Rest your left wrist, Left wrist rest, Wrist left rest, Rotate your left wrist to position three, Move your left wrist to position three, Left wrist to position three, Wrist left to position three
  - Rotação 45°: Rotate your left wrist to forty five, Move your left wrist to forty five, Rotate your left wrist to position four, Move your left wrist to position four, Left wrist to position four, Wrist left to position four
  - Rotação 90°: Rotate your left wrist to ninety, Move your left wrist to ninety, Rotate your left wrist to position five, Move your left wrist to position five, Left wrist to position five, Wrist left to position five
  - Rotação 135°: Rotate your left wrist to one hundred thirty five, Move your left wrist to one hundred thirty five, Rotate your left wrist to position six, Move your left wrist to position six, Left wrist to position six, Wrist left to position six
  - Rotação 180°: Rotate your left wrist to one hundred eighty, Move your left wrist to one hundred eighty, Rotate your left wrist to position seven, Move your left wrist to position seven, Left wrist to position seven, Wrist left to position seven
