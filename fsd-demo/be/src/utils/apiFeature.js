export class APIFeatures {

    constructor(query, queryString) {
        this.query = query
        this.queryString = queryString
    }

    filter() {
        let queryObj = { ...this.queryString }
        console.log(queryObj)
        const excluded = ['page', 'sort', 'limit', 'fields', 'keyword']

        excluded.forEach(ele => delete queryObj[ele])

        let queryStr = JSON.stringify(queryObj)

        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)
        this.query = this.query.find(JSON.parse(queryStr))
        return this
    }

    search() {
        if (this.queryString.keyword) {
            this.query = this.query.find({
                name: { $regex: this.queryString.keyword, $options: 'i' }
            })
        }
        return this
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }
        else {
            this.query = this.query.sort('createdAt')
        }
        return this
    }

    paginate() {
        const page = Number(this.queryString.page) || 1
        const limit = Number(this.queryString.limit) || 10
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this
    }

}