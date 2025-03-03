export const removeProtocol = (url) => {
    if (!url) return "#";
    const u = url.replace(/^(https?:\/\/)/, '');    
    return u.charAt(0).toUpperCase() + u.slice(1);
};



export function isExpired(expireDate) {
    const currentDate = new Date().toISOString().split('T')[0];
    return expireDate < currentDate;
}


export const getUniqueCategories = (coupons) => {
    const uniqueCategories = Array.from(
        new Map(
            coupons.flatMap(coupon => coupon.categories)
                .map(category => [category.Slug, category])
        ).values()
    );

    return uniqueCategories
}