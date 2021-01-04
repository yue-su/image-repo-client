import { Grid } from "@material-ui/core"
import React, { useContext } from "react"
import { imageContext } from "../providers/ImagesProvider"
import Image from "./Image"

const Images = () => {
  const { images } = useContext(imageContext)

  return (
    <Grid container>
      {images.map((image) => {
        return <Image />
      })}
    </Grid>
  )
}

export default Images
