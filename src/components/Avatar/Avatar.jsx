import styles from  './Avatar.module.css'

//utilizando desestruturação ao inves de props, passando valor true como padrão caso não existir outro.

export function Avatar({src, hasBorder = true}){
  return(
    <img  className={hasBorder ? styles.avatarWithBorder : styles.avatarWithoutBorder} src={src} alt="profilePic" />
  )
}