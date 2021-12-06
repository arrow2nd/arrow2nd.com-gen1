/**
 * IDパラメータを文字列に変換
 * @param id IDパラメータ
 * @returns ID文字列
 */
export const toStringId = (id: string | string[]) => {
  return Array.isArray(id) ? id[0] : id
}

/**
 * DraftKeyが存在するかどうか
 * @param arg previewData
 * @returns bool
 */
export const isDraft = (arg: any): arg is { draftKey: string } => {
  if (!arg?.draftKey) {
    return false
  }

  return typeof arg.draftKey === 'string'
}
