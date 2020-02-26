import { shortenText } from '../utils/functions'
import { wordCount, attachUserName } from '../../server/utils'
import { shortText, longText, posts, users } from './__data__/testData'
import { text } from 'express'

test('shortenText will not alter a string under 100chars', () => {
  let shortTextLen = shortText.length
  expect(shortenText(shortText)).toHaveLength(shortTextLen)
})

test('shortenText will shorten text to 100 chars and append ...', () => {
  let shortened = shortenText(longText)
  expect(shortened).not.toHaveLength(longText.length)
  console.log(shortened)
  expect(shortened.slice(-3)).toBe('...')
})

test('wordCount will check posts array for total wordcount', () => {
  expect(wordCount(posts)).toBe(233)
})

test('attachUserName removes posts with no matching username', () => {
  const newPosts = attachUserName(users, posts)
  const deletedPost = posts[5]
  expect(newPosts).not.toContainEqual(deletedPost)
})
