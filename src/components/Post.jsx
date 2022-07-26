import { format, formatDistanceToNow } from 'date-fns'
import styles from './Post.module.css'
import { Comment} from './Comment'
import { Avatar } from './Avatar'
import enCA from 'date-fns/locale/en-CA'
import { useState } from 'react'

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'comment post 1'
  ]);

  const [newCommentText, setNewCommentText]= useState('');

  const publishedDateFormatted = format(publishedAt, "d LLLL HH:mm	aaaa", {locale: enCA})

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {locale: enCA, addSuffix:true})
  
  function handleCreateNewComment() {
    event.preventDefault()                    //the default is to send you to another page on form submitt.
    setComments([...comments, newCommentText])
    setNewCommentText('');
  }
  
  function handleNewCommentChange (){
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete){
    const commentWithoutDeletedOne = comments.filter( comment => {
      return comment !== commentToDelete;
    })
    setComments(commentWithoutDeletedOne);
  }

  const isCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          < Avatar src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
          {content.map(line => {
            if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>;
            } else if (line.type === 'link') {
              return <p key={line.content}><a href="#">{line.content}</a></p>;
            }
          })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment"
          placeholder="Deixe um comentário" 
          value={newCommentText}   
          onChange={handleNewCommentChange}
          required
        />
        <footer>
          <button type='submit' disabled={isCommentEmpty}>Comentar</button>
        </footer>
      </form>

      
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
          <Comment 
            key={comment} 
            content={comment} 
            onDeleteComment={deleteComment}
          />)
        })}
      </div>

    </article>
    
  );
}