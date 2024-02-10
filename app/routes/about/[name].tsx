import { css } from "hono/css";
import { createRoute } from "honox/factory";

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  const name = c.req.param('name')
  return c.render(
    <div class={className}>
      <h1>{name}</h1>
      <a href="/">top</a>
    </div>,
    { title: name }
  )
})
