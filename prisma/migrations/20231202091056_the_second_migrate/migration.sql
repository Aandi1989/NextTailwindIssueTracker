-- CreateTable
CREATE TABLE `revenue` (
    `month` VARCHAR(4) NOT NULL,
    `revenue` INTEGER NOT NULL,

    UNIQUE INDEX `revenue_month_key`(`month`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
