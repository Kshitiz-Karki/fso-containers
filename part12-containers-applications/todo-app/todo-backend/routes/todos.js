const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const redis = require('../redis')

/* GET todos listing. */
router.get('/', async (_, res) => {
  // const response = await redis.getAsync('added_todos')
  // if(response){
  //   console.log('getAsync - ', response);
  // }
  // else console.log('Hiiii');
  const todos = await Todo.find({})
  res.send(todos);
});

let countTodos = 0
/* POST todo to listing. */
router.post('/', async (req, res) => {
  countTodos++
  // console.log('countTodos - ', countTodos);
  await redis.setAsync("added_todos",                         // Key
      JSON.stringify({ "added_todos": countTodos }),          // Value
      // { "added_todos": countTodos }
      // "EX",                                                // Set explicit expiry
      // 60                                                   // TTL in seconds
  );
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  // res.sendStatus(405); // Implement this
  res.send(req.todo);
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  // res.sendStatus(405); // Implement this
  const response = await Todo.findByIdAndUpdate(req.todo._id, req.body, { new: true })
  return res.send(response)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
