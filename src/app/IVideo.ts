export interface IVideo {
    category: string;
    dateAdded: string;
    dateAddedString: string;
    directory: string;
    fileName: string;
    lastPlayed: string; length: string;
    lengthString: string;
    numberOfViews: number;
    rating: number;
    resolution: string;
    serializedImage: string;
    tags: Array<{ value: string }>;
    title: string;
}