export default function timeGenerator(min: number): number {
    return Date.now() + (1000 * 60 * min);
} 