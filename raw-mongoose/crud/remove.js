

/*
 * 删除文档
 * Models have a static remove method available for removing 
 * all documents matching conditions.
 */

Tank.remove({ size: 'large' }, function (err) {
  if (err) return handleError(err);
  // removed!
});
