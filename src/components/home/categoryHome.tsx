interface CategorySectionProps {
    categoryProps: string
}

export function CategorySection({ categoryProps }: CategorySectionProps) {

    return (
        <div className="relative">
            <p className="font-galantic text-store-orange text-5xl absolute -left-4">l</p>
            <span className="font-galantic text-5xl">{categoryProps}</span>
        </div>
    )
}