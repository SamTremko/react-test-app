const getAllChildren = (data) => {
  return data.flatMap((entry) => ([{ Name: entry.Metadata.Name, Hidden: entry.Metadata.Hidden, Notes: entry.Metadata.Notes }, ...(entry.Metadata.Children?.length > 0 ? getAllChildren(entry.Metadata.Children) : [])]));
};

export const deconstructMeta = (data) => {
  return data.flatMap((entry) => ([{ Name: entry.Name, Hidden: entry.Hidden, Notes: entry.Notes }, ...(entry.Children.length > 0) ? getAllChildren(entry.Children) : []]));
};

export const findMetaEntry = (name, metaData) => {
  const metaEntry = metaData.find((metaEntry) => metaEntry.Name === name);
  return {
    Notes: metaEntry.Notes,
    Hidden: metaEntry.Hidden
  }
};