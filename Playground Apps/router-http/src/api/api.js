const FIREBASE_URL = 'https://javascripproject-abc52.firebaseio.com';

export const addQuote = async (quote) => {
  const response = await fetch(`${FIREBASE_URL}/quotes.json`, {
    method: 'POST',
    body: JSON.stringify(quote),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    throw new Error('Adding Quote Failed');
  }

  return null;
};

export const getAllQuotes = async () => {
  const response = await fetch(`${FIREBASE_URL}/quotes.json`);

  if (!response.ok) {
    throw new Error('Something failed with fetching All Quotes');
  }

  const data = await response.json();

  let transformedQuotes = [];

  for (const key in data) {
    const quote = {
      id: key,
      ...data[key],
    };
    transformedQuotes.push(quote);
  }

  return transformedQuotes;
};

export const getSingleQuote = async (id) => {
  const response = await fetch(`${FIREBASE_URL}/quotes/${id}.json`);

  if (!response.ok) {
    throw new Error('Something failed with fetching Single Quote');
  }

  const data = response.json();

  return data;
};

export const removeQuoteWithConnectedComments = async (id) => {
  const quoteResponse = await fetch(`${FIREBASE_URL}/quotes/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  const commentResponse = await fetch(`${FIREBASE_URL}/comments/${id}.json`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!quoteResponse.ok) {
    throw new Error('Something went wrong with deleting the quote');
  }

  if (!commentResponse.ok) {
    throw new Error('Something went wrong with deleting quote comments');
  }

  return null;
};

export const addComment = async (commentData) => {
  const response = await fetch(
    `${FIREBASE_URL}/comments/${commentData.id}.json`,
    {
      method: 'POST',
      body: JSON.stringify(commentData.comment),
      headers: { 'Content-Type': 'application/json' },
    }
  );

  if (!response.ok) {
    throw new Error('Something went wrong with adding comment!');
  }

  const data = await response.json();

  return { commentId: data.name };
};

export const getAllComments = async (id) => {
  const response = await fetch(`${FIREBASE_URL}/comments/${id}.json`);

  if (!response.ok) {
    throw new Error('Something failed with fetching Comments');
  }

  const data = await response.json();

  let transformedComments = [];

  for (const key in data) {
    const comment = {
      id: key,
      ...data[key],
    };
    transformedComments.push(comment);
  }
  return transformedComments;
};
