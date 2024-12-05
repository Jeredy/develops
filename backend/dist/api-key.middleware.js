"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiKeyMiddleware = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let ApiKeyMiddleware = class ApiKeyMiddleware {
    constructor(configService) {
        this.configService = configService;
    }
    use(req, res, next) {
        const authHeader = req.headers['authorization'];
        if (!authHeader) {
            throw new common_1.HttpException('Authorization header is missing', common_1.HttpStatus.FORBIDDEN);
        }
        const [bearer, apiKey] = authHeader.split(' ');
        if (bearer !== 'Bearer' || !apiKey) {
            throw new common_1.HttpException('Invalid Authorization header format', common_1.HttpStatus.FORBIDDEN);
        }
        const validApiKey = this.configService.get('API_SECRET_KEY');
        if (apiKey !== validApiKey) {
            throw new common_1.HttpException('Invalid API key', common_1.HttpStatus.FORBIDDEN);
        }
        next();
    }
};
exports.ApiKeyMiddleware = ApiKeyMiddleware;
exports.ApiKeyMiddleware = ApiKeyMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], ApiKeyMiddleware);
//# sourceMappingURL=api-key.middleware.js.map