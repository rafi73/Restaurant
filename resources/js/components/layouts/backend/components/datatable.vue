<template>
    <div>
        <div class="panel panel-default">
            <div class="panel-heading panel-heading-search">
                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group search-bar">
                            <div class="input-group input-group-lg">
                                <input type="text" class="form-control" v-model="searchQuery" placeholder="Type Article title/subtitle">
                                <span class="input-group-btn">
                                    <button class="btn btn-default" type="button" @click.prevent="searchArticles"
                                        v-html="searchIndicator"></button>
                                </span>
                            </div>
                            <small style="color: #888;">&nbsp;:{{ pagination.total || 0 }} results</small>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <ul class="nav navbar-nav navbar-left search-bar">
                            <li class="dropdown">
                                <button class="btn btn-lg btn-default dropdown-toggle" data-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="fa fa-sort-amount-asc"></i>&nbsp; {{ activeSorting ('asc') }}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><span class="category-heading" data-localize="topnav_dropdown_group">Sort By
                                            Ascending</span></li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a href="#" @click.prevent="setSorting('position', 'asc')">
                                            <i class="fa fa-bullseye"></i>
                                            <span data-localize="topnav_dropdown_seperated_link">Position</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" @click.prevent="setSorting('published_at', 'asc')">
                                            <i class="fa fa-calendar-check-o"></i>
                                            <span data-localize="topnav_dropdown_seperated_link">Publishing Date</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" @click.prevent="setSorting('read_count', 'asc')">
                                            <i class="fa fa-eye"></i>
                                            <span data-localize="topnav_dropdown_seperated_link">Views</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <button class="btn btn-lg btn-default dropdown-toggle" data-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="fa fa-sort-amount-desc"></i>&nbsp; {{ activeSorting ('desc') }}
                                </button>
                                <ul class="dropdown-menu">
                                    <li><span class="category-heading" data-localize="topnav_dropdown_group">Sort By
                                            Descending</span></li>
                                    <li>
                                        <a href="#" @click.prevent="setSorting('position', 'desc')">
                                            <i class="fa fa-bullseye"></i>
                                            <span data-localize="topnav_dropdown_seperated_link">Position</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" @click.prevent="setSorting('published_at', 'desc')">
                                            <i class="fa fa-calendar-check-o"></i>
                                            <span data-localize="topnav_dropdown_seperated_link">Publishing Date</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" @click.prevent="setSorting('read_count', 'desc')">
                                            <i class="fa fa-eye"></i>
                                            <span data-localize="topnav_dropdown_seperated_link">Views</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <button class="btn btn-lg btn-default dropdown-toggle" data-toggle="dropdown"
                                    aria-expanded="false">
                                    <i class="fa fa-check-square-o"></i>&nbsp; Columns
                                </button>
                                <ul class="dropdown-menu">
                                    <li><span class="category-heading" data-localize="topnav_dropdown_group">Select
                                            Columns</span></li>
                                    <li role="separator" class="divider"></li>
                                    <li v-for="(column, index) in columns" :key="index">
                                        <a href="#" @click.prevent="toggleColumn(index)">
                                            <i class="fa fa-check" v-if="column"></i>
                                            <i class="fa fa-times" v-else></i>
                                            <span data-localize="topnav_dropdown_seperated_link">{{ index.toUpperCase()
                                                }}</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <el-select v-model="searchCategoryId" placeholder="Category" size="large">
                                    <el-option value="" label="ALL"></el-option>
                                    <el-option v-for="category in categories" :key="category.id" :label="category.name"
                                        :value="category.id">
                                    </el-option>
                                </el-select>
                            </li>

                        </ul>

                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-sm btn-info pull-right" @click.prevent="newArticle">
                            <i class="fa fa-plus"></i>&nbsp;New
                        </button>
                    </div>
                </div>

            </div>
            <div class="panel-body table-responsive">
                <table class="table table-striped table-hover" v-loading="loading">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td v-if="columns.title">Title</td>
                            <td v-if="columns.subtitle">Subtitle</td>
                            <td v-if="columns.author">Author</td>
                            <td v-if="columns.publisher">Publisher</td>
                            <td v-if="columns.moderator">Moderator</td>
                            <td v-if="columns.category">Category</td>
                            <td v-if="columns.subcategory">Subcategory</td>
                            <td v-if="columns.position">Position</td>
                            <td v-if="columns.status">Status</td>
                            <td v-if="columns.views">Views</td>
                            <td v-if="columns.updated">Last Updated</td>
                            <td v-if="columns.published">Published</td>
                            <td v-if="columns.tags">Tags</td>
                            <td v-if="columns.actions">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="article in articles" :key="article.id">
                            <td>{{ article.id }}</td>
                            <td v-if="columns.title">{{ article.title }}</td>
                            <td v-if="columns.subtitle">{{ article.subtitle }}</td>
                            <td v-if="columns.author">{{ article.author.name }}</td>
                            <td v-if="columns.publisher">{{ article.publisher }}</td>
                            <td v-if="columns.moderator">{{ article.moderator }}</td>
                            <td v-if="columns.category">{{ article.category }}</td>
                            <td v-if="columns.subcategory">{{ article.subcategory }}</td>
                            <td v-if="columns.position">

                                <transition name="el-fade-in-linear">
                                    <a href="#" @click.prevent="editPosition(article)" v-if="!showEditPosition(article.id)">
                                        <el-tag type="primary">{{ article.position }}</el-tag>
                                    </a>
                                </transition>

                                <transition name="el-fade-in-linear">
                                    <div v-if="showEditPosition(article.id)">
                                        <el-input-number size="small" v-model="article.position" :min="1" :max="9999"></el-input-number><br />
                                    </div>
                                </transition>

                                <transition name="el-fade-in-linear">
                                    <el-button type="success" size='small' :loading="isSavingPosition(article.id)"
                                        @click.prevent="savePosition(article)" v-if="showEditPosition(article.id)">Save</el-button>
                                </transition>

                                <transition name="el-fade-in-linear">
                                    <el-button type="info" size='small' @click.prevent="cancelPositioning" v-if="showEditPosition(article.id)">Cancel</el-button>
                                </transition>

                            </td>
                            <td v-if="columns.status">
                                <el-tooltip v-for="tag in getArticleStatuses(article)" :content="tag.name" placement="top"
                                    :key="tag.nick">
                                    <el-tag :type="tag.type" :hit="true">{{ tag.nick }}</el-tag>
                                </el-tooltip>
                            </td>
                            <td v-if="columns.views">{{ article.read_count }}</td>
                            <td v-if="columns.updated">{{ article.updated_timeago }}</td>
                            <td v-if="columns.published">{{ article.published_timeago }}</td>
                            <td v-if="columns.tags">
                                <el-tag type="primary" v-for="tag in article.tags" :key="tag">{{ tag }}</el-tag>
                            </td>
                            <td v-if="columns.actions">
                                <button class="btn btn-success btn-xs" @click.prevent='editArticle(article)'>Edit</button>
                                <button class="btn btn-danger btn-xs" @click.prevent='deleteArticle(article)'>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <pagination :pagination="pagination" :callback="load"></pagination>
        <minimized-articles-widget></minimized-articles-widget>
    </div>
</template>

<script>
    var _ = require('lodash')
    export default {
        name: 'articleIndex',
        data: function () {
            return {
                pagination: {},
                articles: [],
                loading: true,
                sortingField: 'published_at',
                sortingOrder: 'desc',
                status: null,
                searchQuery: '',
                searchQueryIsDirty: false,
                isFetching: false,
                categories: [],
                searchCategoryId: [],
                columns: {
                    title: true,
                    subtitle: false,
                    author: true,
                    publisher: false,
                    moderator: false,
                    category: true,
                    subcategory: false,
                    position: true,
                    status: true,
                    views: true,
                    updated: false,
                    published: false,
                    tags: false,
                    actions: true
                },
                positionEditor: {
                    id: null,
                    old: null,
                    saving: false
                },
                meta: {
                    title: 'Articles'
                }
            }
        },
        computed: {
            searchIndicator: function () {
                if (this.isFetching) {
                    return '<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>'
                } else if (this.searchQueryIsDirty) {
                    return '... Typing'
                } else {
                    return 'Go!'
                }
            },
            currentUser: function () {
                return this.$store.getters.currentUser || []
            }
        },
        methods: {
            newArticle: function () {
                return this.$router.push({ name: 'article-form' })
            },
            editArticle: function (article) {
                if (article.locked === true && (parseInt(article.current_editor) !== parseInt(this.currentUser.id))) {
                    this.$notify.info({
                        title: 'Info',
                        message: 'Cannot edit article. This article is being edited currently.',
                        duration: 0
                    })
                    return false
                }
                return this.$router.push({ name: 'article-edit-form', params: { id: article.id } })
            },
            deleteArticle: function (article) {
                var self = this
                if (article.locked === true) {
                    self.$notify.info({
                        title: 'Info',
                        message: 'Cannot delete article. This article is being edited currently.',
                        duration: 0
                    })
                    return false
                }
                this.$confirm('Delete Article?', 'warning', {
                    confirmButtonText: 'Remove',
                    cancelButtonText: 'Cancel',
                    type: 'warning',
                }).then(() => {
                    self.$http.post('admin/articles/delete', { id: article.id }).then(function (response) {
                        this.load()
                        self.$message({
                            message: 'Deleted!',
                            type: 'error'
                        })
                    }, function (response) {
                        self.$message({
                            message: response.body.message,
                            type: 'error'
                        })
                    })
                }).catch(() => {
                    // Do nothing
                })
            },
            load: function (page = 1) {
                var self = this
                this.loading = true
                var params = {
                    params: {
                        page: page,
                        term: this.searchQuery,
                        field: this.sortingField,
                        order: this.sortingOrder,
                        category_id: this.searchCategoryId,
                        status: this.status
                    }
                }
                this.$http.get('admin/articles', params)
                    .then(function (response) {
                        self.articles = response.body.data
                        self.pagination = response.body.meta.pagination
                        self.loading = false
                        self.isFetching = false
                    }, function (response) {
                        console.log(JSON.stringify(response))
                    })
            },
            setSorting: function (field, order) {
                console.log(field, order)
                if (this.sortingField === field && this.sortingOrder === order) {
                    // Do nothing
                    return false
                }
                this.sortingField = field
                this.sortingOrder = order
                this.load()
            },
            toggleColumn: function (column) {
                this.columns[column] = !this.columns[column]
            },
            activeSorting: function (order) {
                if (this.sortingOrder === order) {
                    if (this.sortingField === 'published_at') {
                        return 'Publishing Date'
                    }
                    if (this.sortingField === 'read_count') {
                        return 'Views'
                    }
                    return this.sortingField
                }
                return ''
            },
            getArticleStatuses: function (article) {
                var statuses = []
                if (article.published) {
                    statuses.push({ nick: 'P', name: 'Published', type: 'success' })
                }
                if (article.moderated) {
                    statuses.push({ nick: 'M', name: 'Moderated', type: 'primary' })
                }
                if (article.breaking) {
                    statuses.push({ nick: 'Br', name: 'Breaking', type: 'danger' })
                }
                if (article.featured) {
                    statuses.push({ nick: 'F', name: 'Featured', type: 'warning' })
                }
                if (article.front_page) {
                    statuses.push({ nick: 'Fr', name: 'Front', type: 'gray' })
                }
                if (article.slider) {
                    statuses.push({ nick: 'Sl', name: 'Slider', type: 'gray' })
                }
                if (article.spotlight) {
                    statuses.push({ nick: 'Sp', name: 'Spotlight', type: 'gray' })
                }
                if (article.locked) {
                    statuses.push({ nick: 'L', name: 'Locked', type: 'danger' })
                }
                return statuses
            },
            editPosition: function (article) {
                this.positionEditor = { id: article.id, saving: false, old: article.position }
            },
            showEditPosition: function (articleId) {
                return this.positionEditor.id === articleId
            },
            isSavingPosition: function (articleId) {
                return (this.positionEditor.id === articleId && this.positionEditor.saving === true)
            },
            savePosition: function (article) {
                var self = this
                this.positionEditor.saving = true
                var requestData = { id: article.id, position: article.position }
                this.$http.post('admin/articles/position', requestData)
                    .then(function (response) {
                        self.positionEditor = { id: null, saving: null, old: null }
                        self.$message({
                            message: 'Position saved!',
                            type: 'success'
                        })
                    }, function (response) {
                        article.position = self.positionEditor.old || article.position
                        self.positionEditor = { id: null, saving: null, old: null }
                        self.$message({
                            message: response.body.message,
                            type: 'error'
                        })
                    })
            },
            cancelPositioning: function () {
                this.positionEditor.id = null
                this.positionEditor.saving = false
            },
            loadCategories: function () {
                var self = this
                this.$http.get('article-categories/all').then(function (response) {
                    self.categories = response.body.data
                    self.categoriesLoaded = true
                }, function (response) {
                    console.log(response)
                })
            },
            searchArticles: _.debounce(function () {
                this.isFetching = true
                setTimeout(function () {
                    this.searchQueryIsDirty = false
                    this.load()
                }.bind(this), 1000)
            }, 500)
        },
        mounted: function () {
            var self = this
            this.load()
            this.loadCategories()
            this.$store.dispatch('setMeta', this.meta)
            this.$bus.$once('article-parameter', function (param) {
                self.status = param
                self.load()
            })
        },
        components: {
            'minimized-articles-widget': require('./MinimizedArticlesWidget')
        },
        watch: {
            searchQuery: function () {
                this.searchQueryIsDirty = true
                this.searchArticles()
            },
            searchCategoryId: function () {
                this.load()
            }
        }
    }
</script>

<style type="text/css">
    .el-input--large .el-input__inner {
        height: 46px;
    }
</style>